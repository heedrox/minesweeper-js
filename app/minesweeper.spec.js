import {minesweeper} from './minesweeper'

describe("Minesweeper", () => {

    const row = (string) => string.split("");

    const DATASET = [
        {input: [[]], output: [[]]},
        {input: [row("**")], output: [row("**")]},
        {input: [row("*.")], output: [row("*1")]},
        {input: [row(".*")], output: [row("1*")]},
        {input: [row("..")], output: [row("00")]},
        {input: [row(".."), row("*.")], output: [row("11"), row("*1")]},
        {input: [row("..."), row("*.."), row("***")], output: [row("110"), row("*42"), row("***")]},
    ];

    DATASET.forEach((data) => {
        it("should work with " + JSON.stringify(data.input), () => {
            const result = minesweeper(data.input);
            expect(result).to.eql(data.output);
        })
    });

});