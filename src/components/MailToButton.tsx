import React from 'react';

enum MailToValues {
    subject = `This is an Email Subject`,
    body = `This is the value of the body and i'm not sure whether this will work properly because the text is going to be really long and i don't want to keep this on one line. \nWe can use the new line code but can we just drop a line and have it work?
    \nWho knows? Only way to find out is to try!
    \nIf i also mess around further with double linebreaks and the like, we might be onto something.
    \n
    \nWhat about adding enbolded unicode characters: 𝐝𝐝𝐝 
    \nOr even Emoji: 🤖`

}


const MailTo: React.FC = () => {

    const openMailClient = (to: string, 
                            cc: string, 
                            bcc: string, 
                            subject: string, 
                            body: string ) => {
        window.location.href = 
        `mailto:${to}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${encodeURIComponent(body)}`;
    }

    return(
        <button
            onClick={() => {openMailClient(
                'example@example.com',
                'cc@example.com',
                'bcc@example.com',
                MailToValues.subject,
                MailToValues.body
            )}}
        >
            Send Mail
        </button>
    )
}

export default MailTo;