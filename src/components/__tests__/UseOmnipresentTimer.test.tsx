import { act, renderHook } from '@testing-library/react-hooks';
import useOmnipresentTimer from '../useOmnipresentTimer';

afterEach(() => {
    jest.clearAllMocks()
  })

describe("App holds a continuous timer tick", () => {
    test("if after a second has passed, the interval has increased", async () => {
        const { result, waitForValueToChange } = renderHook(() => useOmnipresentTimer())
        
        act(() => {
            jest.useFakeTimers();
        });

        expect(result.current.timeOnApp).toBe(0);
        
        await waitForValueToChange(() => {
            return result.current.timeOnApp;
        });
        
        expect(result.current.timeOnApp).toBe(1);
    })
})