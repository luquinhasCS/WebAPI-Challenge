using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI_challenge.Models;
using WebAPI_challenge.Service.EmployeeService;

namespace WebAPI_challenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeInterface _employeeInterface;
        public EmployeeController(IEmployeeInterface employeeInterface)
        {
            _employeeInterface = employeeInterface;
        }
        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> GetEmployees()
        {
            return Ok(await _employeeInterface.GetEmployees());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<EmployeeModel>>> GetEmployeeById(int id)
        {
            ServiceResponse<EmployeeModel> serviceResponse = await _employeeInterface.GetEmployeeById(id);

            return Ok(serviceResponse);
        }
        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> UpdateEmployee(EmployeeModel employeeModel)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = await _employeeInterface.UpdateEmployee(employeeModel);

            return Ok(serviceResponse);
        }

        [HttpPut("DisableEmployee")]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> DisableEmployee(int id)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = await _employeeInterface.DisableEmployee(id);

            return Ok(serviceResponse);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> CreateEmployee(EmployeeModel newEmployee)
        {
            return Ok(await _employeeInterface.CreateEmployee(newEmployee));
        }
        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> DeleteEmployee(int id)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = await _employeeInterface.DeleteEmployee(id);

            return Ok(serviceResponse);
        }

    }
}
