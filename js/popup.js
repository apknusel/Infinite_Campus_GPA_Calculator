document.addEventListener('DOMContentLoaded', (event) => {
document.getElementById('calcGPA').addEventListener('click', function()
    {
        chrome.tabs.query({currentWindow: true, active: true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, 'calcGPA', calcGPA)
            })
    });
});
function calcGPA(total)
{
    document.getElementById('GPA').textContent = total;
}