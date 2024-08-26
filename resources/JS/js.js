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
            error: function () {
                $('#ajaxInfo').empty().html(`<p>Error, try it later or check if the URL is correct</p>`);
            }
        });


    }

    function createRandomPlaceholder() {
        const files = ['GodsAndDeities', 'Heroes', 'MythicalArtifacts', 'Creatures', 'Myths'];
        const file = files[Math.floor(Math.random() * files.length)];

        let access;
        switch (Math.floor(Math.random() * 3)) {
            case 1:
                access = 'all';
                break;

            case 2:
                access = 'id/7';
                break;

            case 3:
                access = 'name/Zeus';
                break;
            default:
                $('#ajaxSearch').attr('value', "search/The Twelve Labors of Hercules");
                return;

        }

        $('#ajaxSearch').attr('value', `${file}/${access}`);
    }


    createRandomPlaceholder();



});