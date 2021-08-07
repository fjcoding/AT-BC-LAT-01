export class PropertyVerifier {

    static check() {}
}

export class AttributesVerifier extends PropertyVerifier {

    static check(Obj, attributes) {
        let verification = true;

        if (Array.isArray(attributes)) {
            for (let index = 0; index < attributes.length; index++) {
                const attribute = attributes[index];

                if (this.isUndefined(Obj, attribute) != true) {
                    verification = this.isUndefined(Obj, attribute);
                    break;
                }
            }
            return verification;
        }

        return  this.isUndefined(Obj, attributes);
    }

    static isUndefined(Obj, attribute) {
        if (Obj[attribute]) {
            return true;
        }

        return attribute + ' does not exist';
    }
}

export class ActorVerifier extends PropertyVerifier {

    static check(Obj, inputName) {
        var result = false;
        var index = 0;
        while(result == false && index < Obj.actors.length) {
            if(Obj.actors[index].name == inputName) result = true;
            index++;
        }

        return (result == true)
            ? true
            : inputName + ' does not exist';
    }
}