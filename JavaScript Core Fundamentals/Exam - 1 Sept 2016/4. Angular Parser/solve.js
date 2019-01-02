function f(arr) {
    let modules = {};

    for (let row = 0; row < arr.length; row++) {
        let tmp = /^[$]app='([\s\S]+?)'$/g.exec(arr[row]);
        if (tmp) {
            modules[tmp[1]] = {
                controllers: [],
                models: [],
                views: []
            };
            arr.splice(row, 1);
        }
    }

    let moduleName = Object.keys(modules);

    for (let row of arr) {
        let [element, forApp] = row.split('&');
        let app = /^app='([\s\S]+?)'$/g.exec(forApp);
        if (app) {
            app = app[1];
            if (moduleName.includes(app)) {
                let controller = /^[$]controller='([\s\S]+?)'$/g.exec(element);
                if (controller) {
                    modules[app].controllers.push(controller[1]);
                }
                let model = /^[$]model='([\s\S]+?)'$/g.exec(element);
                if (model) {
                    modules[app].models.push(model[1]);
                }
                let view = /^[$]view='([\s\S]+?)'$/g.exec(element);
                if (view) {
                    modules[app].views.push(view[1]);
                }
            }
        }
    }

    let sortedModule = moduleName.sort((a, b) => {
        let numOfControllers = modules[b].controllers.length - modules[a].controllers.length;
        if (numOfControllers === 0) {
            let numOfModels = modules[a].models.length - modules[b].models.length;
            if (numOfModels === 0) {
                return 0;
            } else {
                return numOfModels;
            }
        } else {
            return numOfControllers;
        }
    });
    let result = {};
    for (let el of sortedModule) {

        let sortedControllers = modules[el].controllers.sort((a, b) => a.localeCompare(b));
        let sortedModels = modules[el].models.sort((a, b) => a.localeCompare(b));
        let sortedViews = modules[el].views.sort((a, b) => a.localeCompare(b));

        result[el] = {
            controllers: sortedControllers,
            models: sortedModels,
            views: sortedViews
        };
    }
    console.log(JSON.stringify(result));
}


f([
    "$app='MyApp'",
    "$controller='My Controller'&app='MyApp'",
    "$model='My Model'&app='MyApp'",
    "$view='My View'&app='MyApp'"]);

console.log();

f([
    "$controller='PHPController'&app='Language Parser'"
    , "$controller='JavaController'&app='Language Parser'"
    , "$controller='C#Controller'&app='Language Parser'"
    , "$controller='C++Controller'&app='Language Parser'"
    , "$app='Garbage Collector'"
    , "$controller='GarbageController'&app='Garbage Collector'"
    , "$controller='SpamController'&app='Garbage Collector'"
    , "$app='Language Parser'"

]);