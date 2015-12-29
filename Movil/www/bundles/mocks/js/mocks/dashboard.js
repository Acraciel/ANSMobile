angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Dashboard", function(method, url, data)
    {
        var result = {};
        
        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

});
