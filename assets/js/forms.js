function Route(sPath, sDiv)
{
    fetch(''+sPath+'')
        .then(response => response.text())
        .then(html => {
            document.getElementById(''+sDiv+'').innerHTML = html;
        })
        .catch(error => console.error('Error loading HTML:', error));
    return false;
}

function AddAttendance()
{
    let selectcourse = $("#select-course").val();

    if (selectcourse == "")
    {
        iziToast.error({timeout: 5000, icon: 'bi bi-exclamation-triangle', position: "bottomLeft", title: 'Error', message: 'Please enter your course'});
        return false;
    }

    // success
    iziToast.success({timeout: 5000, color : '#ffe8e1', icon: 'bi bi-check-lg', position: "bottomLeft", title: 'Success', message: 'Attendance Added Successfully'});

    Route("Attendance/add-attendence.html", "content");
    return false;
}

function AddForm()
{
    // success
    iziToast.success({timeout: 5000, color : '#ffe8e1', icon: 'bi bi-check-lg', position: "bottomLeft", title: 'Success', message: 'Record Added Successfully'});

    return false;
}