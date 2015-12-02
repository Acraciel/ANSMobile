angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Cotizar", function(method, url, data)
    {
        var result = {
        };

        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

});
