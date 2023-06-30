// CON DEEP COPY ES POSIBLE COPIAR UN OBJETO CON ARREGLOS U OBJETOS ANIDADOS EN ÉL SIN GENERAR REFERENCIAS A ESTOS ARREGLOS U OBJETOS ANIDADOS EN LA COPIA.

function deepCopy(element) {
    let copyElement;

    function isArray(e) {
        return Array.isArray(e);
    }

    function isObject(e) {
        return typeof e === "object";
    }

    let elementIsArray = isArray(element);
    let elementIsObject = isObject(element);

    if (elementIsArray) {
        copyElement = [];
    } else if (elementIsObject) {
        copyElement = {};
    } else {
        return element;
    }

    for (subElement in element) {
        let subElementIsObject = isObject(element[subElement]);

        if (subElementIsObject) {
            copyElement[subElement] = deepCopy(element[subElement]);
        } else if (elementIsArray) {
            copyElement.push(element[subElement]);
        } else {
            copyElement[subElement] = element[subElement];
        }
    }

    return copyElement;
}

let obj1 = {
    a: 5,
    b: { c: "c" },
    d() {
        console.log("d");
    },
};

let obj2 = deepCopy(obj1);

console.log(obj1, obj2);

obj2.d = "d";

console.log(obj1, obj2);
