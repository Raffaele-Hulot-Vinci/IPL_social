export class Validator{

    hasAt(email: string){
        return position(email, "@") !== -1;
    }

    atNotFirstNotLast(email:string){
        return notFirst(email, "@") && notLast(email, "@");
    }

    hasDot(email: string){
        return position(email, ".") !== -1;
    }

    dotNotLast(email: string){
        return notLast(email, ".");
    }

    hasNoSpace(email: string){
        return position(email, " ") === -1;
    }
}

function position(email: string, char: string){
    for (let i = 0; i < email.length; i++) {
        if(email.charAt(i)===char){
            return i;
        }
    }
    return -1;
}

function notFirst(email: string, char: string){
    return email.charAt(0) !== char;
}

function notLast(email: string, char: string){
    return email.charAt(email.length-1) !== char;
}
