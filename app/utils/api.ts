export const getExploreData = async function(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`,{cache: 'force-cache'})
        return await res.json();
    }catch(e){
        console.log(e);
    }
}

export const getLiveData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`,{cache: 'force-cache'});
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getSearchData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};