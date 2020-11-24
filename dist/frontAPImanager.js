class APImanagerFront {
    constructor() {
        this.data = []
    }

    getTeamPlayers(team, renderer) {
        $.ajax({
            method: 'GET',
            url: `/teams/${team}`,
            success: res => {
                console.log(res);
                renderer(res)
            }
        })
    }
}