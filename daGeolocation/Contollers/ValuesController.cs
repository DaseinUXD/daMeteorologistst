using daGeolocation.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace daGeolocation.Controllers
{

  public class ValuesController : ApiController
  {
    private static string _address = "http://ziplocate.us/api/v1/";
    // GET api/values
    public static async void GetLocation()
    {
      HttpClient location = new HttpClient();
      HttpResponseMessage response = await location.GetAsync(_address);
      JArray locations = await response.Content.ReadAsAsync<JArray>();

      Console.WriteLine(locations);
    }

    

    // GET api/values/5
    public Location Get(int id)
    {
      return "value";
    }

    // POST api/values
    public void Post([FromBody]string value)
    {
    }

    // PUT api/values/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    public void Delete(int id)
    {
    }
  }
}
