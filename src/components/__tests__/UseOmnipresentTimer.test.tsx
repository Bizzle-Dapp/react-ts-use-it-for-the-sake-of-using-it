import { act, renderHook } from '@testing-library/react-hooks';
import useOmnipresentTimer from '../useOmnipresentTimer';

describe("App holds a continuous timer tick", () => {
    test("if after a second has passed, the interval has increased", async () => {
        const { result, waitForValueToChange } = renderHook(() => useOmnipresentTimer())

        expect(result.current.timeOnApp).toBe(0);
        
        await waitForValueToChange(() => {
            return result.current.timeOnApp;
        }, {timeout: 2000});
        
        expect(result.current.timeOnApp).toBe(1);
    })
})