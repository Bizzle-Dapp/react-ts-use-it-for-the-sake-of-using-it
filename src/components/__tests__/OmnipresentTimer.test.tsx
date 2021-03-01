import { act, renderHook } from '@testing-library/react-hooks';
import OmnipresentTimer from '../OmnipresentTimer';

afterEach(() => {
    jest.clearAllMocks()
  })

describe("App holds a continuous timer tick", () => {
    test("if after a second has passed, the interval has increased", async () => {
        const { result, waitForValueToChange } = renderHook(() => OmnipresentTimer())
        
        act(() => {
            jest.useFakeTimers();
        });

        expect(result.current.timeOnApp).toEqual(0);
        
        await waitForValueToChange(() => {
            return result.current.timeOnApp;
        });
        
        expect(result.current.timeOnApp).toEqual(1);
    })
})