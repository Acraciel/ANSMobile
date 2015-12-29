angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Ejecutivos", function(method, url, data)
    {
        var result = [
                {
                image: "bundles/mocks/css/images/user.png",
                name: "John Doe",
                telefono: "7 852 41 12",
                email: "JDoe@correo.cl",
                cargo: "Administrador"
                },
                {
                image: "bundles/mocks/css/images/user.png",
                name: "Julian Dorso",
                telefono: "7 222 41 12",
                email: "JDorso@correo.cl",
                cargo: "Otro"
                },
                {
                image: "bundles/mocks/css/images/user.png",
                name: "Sebastián Aurelio",
                telefono: "7 333 41 12",
                email: "SAurelioe@correo.cl",
                cargo: "Administrador"
                },
                {
                image: "bundles/mocks/css/images/user.png",
                name: "Vanessa Perez",
                telefono: "7 874 41 12",
                email: "VPerez@correo.cl",
                cargo: "Otro"
                },
                {
                image: "bundles/mocks/css/images/user.png",
                name: "Andrea Van",
                telefono: "7 882 41 12",
                email: "AVan@correo.cl",
                cargo: "Administrador"
                }
            ];

        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

});
