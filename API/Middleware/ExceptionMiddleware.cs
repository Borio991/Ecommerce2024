using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IHostEnvironment _env;
        private readonly ILogger<Exception> _logger;
        public ExceptionMiddleware(RequestDelegate next, ILogger<Exception> logger,IHostEnvironment env)
        {
            _logger = logger;
            _env = env;
            _next = next;
        }
        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                httpContext.Response.StatusCode = 500;
                httpContext.Response.ContentType = "application/json";

                var response = new ProblemDetails()
                {
                    Status = 500,
                    Detail = _env.IsDevelopment() ? ex.StackTrace : null,
                    Title = ex.Message
                };

                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
                var json = JsonSerializer.Serialize(response,options);
                await httpContext.Response.WriteAsync(json);
            }
        }
    }
}