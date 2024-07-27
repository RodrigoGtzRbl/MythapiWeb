$(document).ready(function () {

    $('#ajaxBtn').click(function () {

        const url = 'https://mythapi.onrender.com/' + $('#ajaxSearch').val();
        search(url);
    });

    function search(url) {

        $.ajax({
            url: url, 
            method: 'GET', 
            dataType: 'json', 
            success: function (response) {
                const jsonString = JSON.stringify(response, null, 2);
               
                $('#ajaxInfo').empty().html(`
                    <div class="container mt-4">
                        <pre>${jsonString}</pre>
                    </div>
                `);
            },
            error: function() {
                $('#ajaxInfo').empty().html(`<p>Error, try it later or check if the URL is correct</p>`);
            }
        });
        
        
    }
});