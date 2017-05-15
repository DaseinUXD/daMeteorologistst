<%@ Page Title="Stamp Builder" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="daMeteorologistst._Default" %>


<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
  <div style="width: 800px; margin-left: auto; margin-right: auto;">
    <h1>Stamp Builder</h1>,
    <hr />
    <div class="row">
      <div class="col-lg-6">
        <h2>Property Settings</h2>
        <div class="form-group">
          <label for="propName">Property</label>
          <input type="text" class="form-control" id="propName" placeholder="">
        </div>
        <div class="form-group">
          <label for="propFTP">FTP Box</label>
          <input type="text" class="form-control" id="propFTP" placeholder="00019">
        </div>
        <div class="form-group">
          <label for="propCity">City</label>
          <input type="text" class="form-control" id="propCity" placeholder="">
        </div>
                <div class="form-group">
          <label for="propState">State:</label>
          <select class="form-control" id="propState">
            <option>TN</option>
            <option>TX</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div class="form-group">
          <label for="propZip">ZipCode</label>
          <input type="text" class="form-control" id="propZip" placeholder="">
        </div>
      </div>
      <!-- Stamp Settings -->
      <div class="col-lg-6">
        <h2>Stamp Settings</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Width</label>
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Height</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="">
        </div>
        <div class="form-group">
          <label for="exampleInputFile">Background Image</label>
          <input type="file" id="exampleInputFile">
          <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>

        <br />
        <br />
        <div class="container">
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker();
            });
        </script>
    </div>
</div>

      </div>
    </div>
  </div>
</asp:Content>

