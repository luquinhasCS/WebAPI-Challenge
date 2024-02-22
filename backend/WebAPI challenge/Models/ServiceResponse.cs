
namespace WebAPI_challenge.Models
{
    public class ServiceResponse<T>
    {
        public T? Data { get; set; }
        public string Message { get; set; } = String.Empty;
        public bool Success { get; set; } = true;

        public static implicit operator ServiceResponse<T>(ServiceResponse<List<EmployeeModel>> v)
        {
            throw new NotImplementedException();
        }
    }
}
