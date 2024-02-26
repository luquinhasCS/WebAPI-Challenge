using FluentValidation;

namespace WebAPI_challenge.Models
{
    public class EmployeeValidator : AbstractValidator<EmployeeModel>

    {
        public EmployeeValidator() {
            RuleFor(p => p.Name)
                            .NotEmpty()
                            .WithMessage("Name is required");

            RuleFor(p => p.Surname)
                            .NotEmpty()
                            .WithMessage("Surname is required");

            RuleFor(p => p.Shift)
                .IsInEnum()
                .WithMessage("Shift is required");

            RuleFor(p => p.Department)
                .IsInEnum()
                .WithMessage("Department is required");

        }
    }
}
