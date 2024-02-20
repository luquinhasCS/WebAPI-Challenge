using System.Text.Json.Serialization;

namespace WebAPI_challenge.Enums
{
    [JsonConverter(typeof (JsonStringEnumConverter))]
    public enum DepartmentEnum
    {
        HR,
        Financial,
        Purchasing,
        Service,
        Janitorial
    }
}
