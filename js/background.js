chrome.runtime.onMessage.addListener(function (request, sender, sendResponse)
{
    var grades = [];
    var total = 0;
    var counter = 0;
    fetch("https://infinitecampus.naperville203.org/campus/resources/portal/grades").then(response=>response.json()).then(data=>
    {
        for (i = 0;i<data[0].courses.length;i++)
        {
            grades.push(parseFloat(data[0].courses[i].gradingTasks[2].progressPercent));
        }
        grades = grades.filter(e=>!Number.isNaN(e));
        for (i = 0; i < grades.length; i++)
        {
            if (grades[i] >= 89.5)
            {
                counter+=4;
            }
            else if (grades[i] >= 79.5)
            {
                counter+=3;
            }
            else if (grades[i] >= 69.5)
            {
                counter+=2;
            }
            else if (grades[i] >= 59.6)
            {
                counter+=1;
            }
            else
            {
                counter+=0;
            }
        }
        total = counter/grades.length;
        sendResponse("Your current GPA is "+total);
    })
    return true;
});