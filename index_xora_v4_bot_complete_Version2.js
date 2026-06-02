    generateDeadCode() {
        const patterns = [
            () => `local _d${this.deadCodeCount} = ${this.rng.next()}; if _d${this.deadCodeCount} > 0 then _d${this.deadCodeCount} = 0 end`,
            () => `do local _x, _y = ${this.rng.next()}, ${this.rng.next()}; _ = _x + _y end`,
            () => `local _t = {${this.rng.next()}, ${this.rng.next()}, ${this.rng.next()}}; _ = #_t`,
            () => `if bit32.band(${this.rng.next()}, 0xFF) == 0xFF then end`,
            () => `while false do local _ = ${this.rng.next()} end`,
            () => `local _f = function() return ${this.rng.next()} end; _f()`,
            () => `local _s = "${Math.random().toString(36).substring(2, 8)}"; _ = #_s`,
        ];

        const patternIndex = Math.abs(this.rng.next()) % patterns.length;
        const patternFunction = patterns[patternIndex];
        const deadCode = patternFunction();
        
        this.deadCodeCount++;
        return deadCode;
    }
