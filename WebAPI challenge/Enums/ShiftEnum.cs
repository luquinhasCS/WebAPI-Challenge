using System.Text.Json.Serialization;

namespace WebAPI_challenge.Enums
{
    [JsonConverter(typeof (JsonStringEnumConverter))]
    public enum ShiftEnum
    {
        Morning,
        Afternoon,
        Night
    }
}
