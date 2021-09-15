import { BN } from "bn.js";
import { fromNano, toNano } from "..";

const cases: { nano: string, real: string }[] = [
    { real: '1', nano: '1000000000' },
    { real: '10', nano: '10000000000' },
    { real: '0.1', nano: '100000000' },
    { real: '0.33', nano: '330000000' }
];

describe('convert', () => {
    it('should convert toNano', () => {
        for (let r of cases) {
            let c = toNano(r.real);
            expect(c.eq(new BN(r.nano))).toBe(true);
        }
    });
    it('should convert fromNano', () => {
        for (let r of cases) {
            let c = fromNano(r.nano);
            expect(c).toEqual(r.real);
        }
    });
});