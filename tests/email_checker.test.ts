import { Validator } from "../src/email_checker";

describe("email test", function() {
    const checker = new Validator;

    const right = "email@domain.right";
    const wrongNoAt = "emaildomain.wrong";
    const wrongAtAtStart = "@emaildomain.wrong";
    const wrongAtAtEnd = "emaildomain.wrong@";
    const wrongNoDot = "email@domainwrong";
    const wrongDotLast = "email@domainwrong.";
    const wrongHasSpace = "email@ domain.wrong";
    
    ///////////////////////////////////////

    it("HasAt right", function() {
        const result = checker.hasAt(right);
        expect(result).toBe(true);
    });

    it("HasAt wrongNoAt", function() {
        const result = checker.hasAt(wrongNoAt);
        expect(result).toBe(false);
    });

    it("HasAt wrongAtAtStart", function() {
        const result = checker.hasAt(wrongAtAtStart);
        expect(result).toBe(true);
    });

    it("HasAt wrongAtAtEnd", function() {
        const result = checker.hasAt(wrongAtAtEnd);
        expect(result).toBe(true);
    });

    it("HasAt wrongNoDot", function() {
        const result = checker.hasAt(wrongNoDot);
        expect(result).toBe(true);
    });

    it("HasAt wrongDotLast", function() {
        const result = checker.hasAt(wrongDotLast);
        expect(result).toBe(true);
    });

    it("HasAt wrongHasSpace", function() {
        const result = checker.hasAt(wrongHasSpace);
        expect(result).toBe(true);
    });

    ///////////////////////////////////////

    it("atNotFirstNotLast right", function() {
        const result = checker.atNotFirstNotLast(right);
        expect(result).toBe(true);
    });

    it("atNotFirstNotLast wrongNoAt", function() {
        const result = checker.atNotFirstNotLast(wrongNoAt);
        expect(result).toBe(true);
    });

    it("atNotFirstNotLast wrongAtAtStart", function() {
        const result = checker.atNotFirstNotLast(wrongAtAtStart);
        expect(result).toBe(false);
    });

    it("atNotFirstNotLast wrongAtAtEnd", function() {
        const result = checker.atNotFirstNotLast(wrongAtAtEnd);
        expect(result).toBe(false);
    });

    it("atNotFirstNotLast wrongNoDot", function() {
        const result = checker.atNotFirstNotLast(wrongNoDot);
        expect(result).toBe(true);
    });

    it("atNotFirstNotLast wrongDotLast", function() {
        const result = checker.atNotFirstNotLast(wrongDotLast);
        expect(result).toBe(true);
    });

    it("atNotFirstNotLast wrongHasSpace", function() {
        const result = checker.atNotFirstNotLast(wrongHasSpace);
        expect(result).toBe(true);
    });

    ///////////////////////////////////////

    it("hasDot right", function() {
        const result = checker.hasDot(right);
        expect(result).toBe(true);
    });

    it("hasDot wrongNoAt", function() {
        const result = checker.hasDot(wrongNoAt);
        expect(result).toBe(true);
    });

    it("hasDot wrongAtAtStart", function() {
        const result = checker.hasDot(wrongAtAtStart);
        expect(result).toBe(true);
    });

    it("hasDot wrongAtAtEnd", function() {
        const result = checker.hasDot(wrongAtAtEnd);
        expect(result).toBe(true);
    });

    it("hasDot wrongNoDot", function() {
        const result = checker.hasDot(wrongNoDot);
        expect(result).toBe(false);
    });

    it("hasDot wrongDotLast", function() {
        const result = checker.hasDot(wrongDotLast);
        expect(result).toBe(true);
    });

    it("hasDot wrongHasSpace", function() {
        const result = checker.hasDot(wrongHasSpace);
        expect(result).toBe(true);
    });

    ///////////////////////////////////////

    it("dotNotLast right", function() {
        const result = checker.dotNotLast(right);
        expect(result).toBe(true);
    });

    it("dotNotLast wrongNoAt", function() {
        const result = checker.dotNotLast(wrongNoAt);
        expect(result).toBe(true);
    });

    it("dotNotLast wrongAtAtStart", function() {
        const result = checker.dotNotLast(wrongAtAtStart);
        expect(result).toBe(true);
    });

    it("dotNotLast wrongAtAtEnd", function() {
        const result = checker.dotNotLast(wrongAtAtEnd);
        expect(result).toBe(true);
    });

    it("dotNotLast wrongNoDot", function() {
        const result = checker.dotNotLast(wrongNoDot);
        expect(result).toBe(true);
    });

    it("dotNotLast wrongDotLast", function() {
        const result = checker.dotNotLast(wrongDotLast);
        expect(result).toBe(false);
    });

    it("dotNotLast wrongHasSpace", function() {
        const result = checker.dotNotLast(wrongHasSpace);
        expect(result).toBe(true);
    });

    ///////////////////////////////////////

    it("hasNoSpace right", function() {
        const result = checker.hasNoSpace(right);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongNoAt", function() {
        const result = checker.hasNoSpace(wrongNoAt);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongAtAtStart", function() {
        const result = checker.hasNoSpace(wrongAtAtStart);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongAtAtEnd", function() {
        const result = checker.hasNoSpace(wrongAtAtEnd);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongNoDot", function() {
        const result = checker.hasNoSpace(wrongNoDot);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongDotLast", function() {
        const result = checker.hasNoSpace(wrongDotLast);
        expect(result).toBe(true);
    });

    it("hasNoSpace wrongHasSpace", function() {
        const result = checker.hasNoSpace(wrongHasSpace);
        expect(result).toBe(false);
    });
})