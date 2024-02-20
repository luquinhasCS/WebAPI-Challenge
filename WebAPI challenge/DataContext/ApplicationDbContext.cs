using Microsoft.EntityFrameworkCore;
using WebAPI_challenge.Models;

namespace WebAPI_challenge.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<EmployeeModel> Employee { get; set; } 
    }
}
