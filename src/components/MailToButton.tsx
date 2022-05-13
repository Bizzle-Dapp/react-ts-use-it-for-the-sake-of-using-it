import React, { useEffect, useState } from 'react';

enum MailToValues {
    subject = `This is an Email Subject`,
    body = `This is the value of the body and i'm not sure whether this will work properly because the text is going to be really long and i don't want to keep this on one line. \nWe can use the new line code but can we just drop a line and have it work?
    \nWho knows? Only way to find out is to try!
    \nIf i also mess around further with double linebreaks and the like, we might be onto something.
    \n
    \nWhat about adding enbolded unicode characters: 𝐝𝐝𝐝 
    \nOr even Emoji: 🤖
    `
}

const MailTo: React.FC = () => {

    const [opening, setOpening] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mailClientTriggerWait, setMailClientTriggerWait] = useState(0);
    const [controller] = useState(new AbortController());
    
    const [error, setError] = useState('');
    const [length, setLength] = useState(0);
    const openMailClient = (to: string,
        cc: string,
        bcc: string,
        subject: string,
        body: string) => {
        const uriValue = `mailto:${to}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${encodeURIComponent(body)}`;
        setLength(uriValue.length);
        window.location.href =
            `mailto:${to}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${encodeURIComponent(body)}`;
    }

    const onTriggerEffect = (event: any) => {
        console.log("Triggered", event);
        setError(``)
        setSuccess(true);
        setOpening(false);
        setMailClientTriggerWait(0)
        controller.abort();
    }

    // Using the window focus to detect if the mail client opened in a period of time
    const handleMailClientOpenTracking = (to: string,
        cc: string,
        bcc: string,
        subject: string,
        body: string) => {
        setOpening(true);
        setSuccess(false);

        window.addEventListener('blur', onTriggerEffect, { signal: controller.signal } as AddEventListenerOptions);
        openMailClient(to, cc, bcc, subject, body);
    }


    useEffect(() => {
        if (opening) {
            const failTriggerEffect = () => {
                console.log("Triggered Closure", mailClientTriggerWait)
                setError(
                    `The mail client is either taking abnormally long to open or has failed to open.
                If it has indeed failed, this could be due to a long data object being sent. 
                Please reduce the length of the URI to below 2000.
                `)
                setOpening(false);
                controller.abort();
            };
            let intervalId = window.setInterval(() => {
                setMailClientTriggerWait(value => value + 1);
                console.log("Tick", mailClientTriggerWait);
            }, 1000);
            if(success){
                window.clearInterval(intervalId)
                return;
            }
            if (mailClientTriggerWait === 4) {
                failTriggerEffect();
                window.clearInterval(intervalId)
                return;
            }
            return () => window.clearInterval(intervalId)
        }
    }, [opening, success, mailClientTriggerWait])

    return (
        <div>
            <button
                onClick={() => {
                    handleMailClientOpenTracking(
                        'example@example.com',
                        'cc@example.com',
                        'bcc@example.com',
                        MailToValues.subject,
                        MailToValues.body
                    )
                }}
                disabled={opening}
            >
                Send Mail
            </button>
            <p>Last URI Length: {length}</p>
            <p style={{ color: 'darkred' }}>{error}</p>
        </div>
    )
}

export default MailTo;