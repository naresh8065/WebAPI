// JavaScript source code
function deleteEntity()
{
    var req = new XMLHttpRequest();
    req.open("DELETE", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/vsms_developerses(a7440517-c082-e911-a979-000d3af03194)", true);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 204 || this.status === 1223) {
                //Success - No Return Data - Do Something
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}