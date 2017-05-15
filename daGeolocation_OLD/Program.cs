using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace daGeolocation
{
  public class Program
  {
    private static string _address = "http://ziplocate.us/api/v1/";

    private static async void RunClient()
    {
      HttpClient client = new HttpClient();

      HttpResponseMessage response = await client.GetAsync(_address);

      response.EnsureSuccessStatusCode();

      JArray content = await response.Content.ReadAsAsync<JArray>();

      Console.WriteLine("Location");
      foreach (var Location in content[1])
      {
        Console.WriteLine(" {0}, Latitude: {1}, Longitude: {2}, ZipCode: {3} ",
          Location.Value<float>("lat"),
          Location.Value<float>("lng"),
          Location.Value<string>("zip"));
      }
      
    }
    static void Main(string[] args)
    {
      RunClient();

      Console.WriteLine("Hit ENTER to exit...");
      Console.ReadLine();
    }
  }
  
}