using WebAPI_challenge.Models;

namespace WebAPI_challenge.Service.EmployeeService
{
    public interface IEmployeeInterface
    {
        Task<ServiceResponse<List<EmployeeModel>>> GetEmployees();
        Task<ServiceResponse<List<EmployeeModel>>> CreateEmployee(EmployeeModel newEmployee);
        Task<ServiceResponse<List<EmployeeModel>>> GetEmployeeById(int id);
        Task<ServiceResponse<List<EmployeeModel>>> UpdateEmployee (EmployeeModel changedEmployee);
        Task<ServiceResponse<List<EmployeeModel>>> DeleteEmployee (int id);
        Task<ServiceResponse<List<EmployeeModel>>> DisableEmployee (int id);
    }
}
