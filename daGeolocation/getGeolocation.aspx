<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getGeolocation.aspx.cs" Inherits="daGeolocation.getGeolocation" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
          <h1>Get Geolocation Data</h1>
          <asp:Label ID="zipLabel" runat="server" Text="Enter Zip Code: "></asp:Label>

          <asp:TextBox ID="zipCode" runat="server"></asp:TextBox>
          <br />

        </div>
    </form>
</body>
</html>
