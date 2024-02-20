using System.ComponentModel.DataAnnotations;
using WebAPI_challenge.Enums;

namespace WebAPI_challenge.Models
{
    public class EmployeeModel
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DepartmentEnum Department { get; set; }
        public bool Active { get; set; }
        public ShiftEnum Shift{ get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now.ToLocalTime();
        public DateTime ModificationDate { get; set; } = DateTime.Now.ToLocalTime();
    }
}
