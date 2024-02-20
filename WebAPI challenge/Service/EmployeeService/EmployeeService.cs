using Microsoft.EntityFrameworkCore;
using WebAPI_challenge.DataContext;
using WebAPI_challenge.Models;

namespace WebAPI_challenge.Service.EmployeeService
{
    public class EmployeeService : IEmployeeInterface
    {
        private readonly ApplicationDbContext _context;
        public EmployeeService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<ServiceResponse<List<EmployeeModel>>> CreateEmployee(EmployeeModel newEmployee)
        {
            {
                ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();


                try
                {
                    if (newEmployee == null)
                    {
                        serviceResponse.Data = null;
                        serviceResponse.Message = "Please, inform data!";
                        serviceResponse.Success = false;

                        return serviceResponse;
                    }

                    _context.Add(newEmployee);
                    await _context.SaveChangesAsync();

                    serviceResponse.Data = _context.Employee.ToList();
                }
                catch (Exception ex)
                {
                    serviceResponse.Message = ex.Message;
                    serviceResponse.Success = false;
                }

                return serviceResponse;
            }

        }

        public async Task<ServiceResponse<List<EmployeeModel>>> DeleteEmployee(int id)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

            try
            {
                EmployeeModel employee = _context.Employee.FirstOrDefault(x => x.Id == id);

                if (employee == null)
                {
                    serviceResponse.Data = null;
                    serviceResponse.Message = "Please, inform data!";
                    serviceResponse.Success = false;

                    return serviceResponse;
                }

                _context.Employee.Remove(employee);
                await _context.SaveChangesAsync();

                serviceResponse.Data = _context.Employee.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<EmployeeModel>>> DisableEmployee(int id)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

            try
            {
                EmployeeModel employee = _context.Employee.FirstOrDefault(x => x.Id == id);

                if (employee == null)
                {
                    serviceResponse.Data = null;
                    serviceResponse.Message = "User not found!";
                    serviceResponse.Success = false;
                }  

                employee.Active = true;
                employee.ModificationDate = DateTime.Now.ToLocalTime();

                _context.Employee.Update(employee);
                await _context.SaveChangesAsync();

                serviceResponse.Data = _context.Employee.ToList();
            }
            catch(Exception ex)
            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<EmployeeModel>>> GetEmployees()
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

            try
            {
                serviceResponse.Data = _context.Employee.ToList();
                if (serviceResponse.Data.Count == 0)
                {
                    serviceResponse.Message = "Any data found!";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<EmployeeModel>> GetEmployeeById(int id)
        {
            ServiceResponse<EmployeeModel> serviceResponse = new ServiceResponse<EmployeeModel>();

            try
            {
                EmployeeModel employee = _context.Employee.FirstOrDefault(x => x.Id == id);
                
                if (employee == null)
                {
                    serviceResponse.Data = null;
                    serviceResponse.Message = "User not found!";
                    serviceResponse.Success = false;
                }
                
                serviceResponse.Data = employee;

            }
            catch(Exception ex)

            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<EmployeeModel>>> UpdateEmployee(EmployeeModel changedEmployee)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

            try
            {
                EmployeeModel employee = _context.Employee.AsNoTracking().FirstOrDefault(x => x.Id == changedEmployee.Id);

                if (employee == null)
                {
                    serviceResponse.Data = null;
                    serviceResponse.Message = "User not found!";
                    serviceResponse.Success = false;

                    return serviceResponse;
                }

                employee.ModificationDate = DateTime.Now.ToLocalTime();
                _context.Employee.Update(changedEmployee);
                await _context.SaveChangesAsync();
                serviceResponse.Data = _context.Employee.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }

        Task<ServiceResponse<List<EmployeeModel>>> IEmployeeInterface.GetEmployeeById(int id)
        {
            throw new NotImplementedException();
        }
    }
}