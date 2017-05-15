using ComputerOrderForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ComputerOrderForm
{
  public partial class ReviewComputerOrder : System.Web.UI.Page
  {
    protected void Page_Load(object sender, EventArgs e)
    {
      ComputerOrder order = Session["CurrentOrder"] as ComputerOrder;
      OrderNumber.Text = order.OrderId.ToString();
      OrderName.Text = order.OrderName;
      CustomerName.Text = order.CustomerName;
      CustomerEmail.Text = order.CustomerEmail;
      DeliveryDate.Text = order.DeliveryDate.ToShortDateString();
      PartNumber.Text = order.PartNumber.ToString();
      RushOrder.Text = order.Rush == true ? "Yes" : "No";
    }
  }
}