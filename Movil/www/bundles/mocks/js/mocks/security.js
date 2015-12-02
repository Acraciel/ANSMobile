angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenPOST("/Security/Authorize", function(method, url, data)
    {
        var object = JSON.parse(data);
        if (object.username == "admin")
        {
            var result = {
                "expires_in": 1000000,
                "token_type": "Bearer",
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkJlYXJlciJ9.eyJlbWFpbCI6InJyb2phc0B2YWxlbnR5cy5jb20iLCJwcmltYXJ5c2lkIjoicnJvamFzIiwidW5pcXVlX25hbWUiOiJSb2RyaWdvIFJvamFzIFMuIiwicm9sZSI6WyJSb2xlIDEiLCJSb2xlIDEiXSwiaXNzIjoiT0F1dGhTZXJ2ZXIiLCJhdWQiOiJPQXV0aENsaWVudCIsImV4cCI6MTAwMDAwMCwibmJmIjoxNDI2OTkxMTcxfQ.a9_rb1a6DYy5HR4E_FEo7quiPK-4oUQZXiFrTVgfXr0"
            };
            return [
                200,
                result,
                {}
            ];
        }
        else
        {
            return [
                500,
                {error_description :"Tu nombre de usuario y/o contraseña es incorrecto"},
                {}
            ];
        }

    });
    //-------------------------------------------------------------

});
