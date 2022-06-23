
function wait(time){
    return new Promise((resolve, reject)=>
    setTimeout(resolve,time)
    );
}

class API {
    static async getPosts(){
        await wait(2000);
        var res = await fetch('../data/posts.json');
        return await res.json();
    }

    static async getMenue(){
        var res = await fetch('../data/menue.json');
        await wait(2000);
        return await res.json();

    }

    static async getReviews(){
        var res = await fetch('../data/feedback.json');
        await wait(2000);
        return await res.json();
    }
}

export {API};