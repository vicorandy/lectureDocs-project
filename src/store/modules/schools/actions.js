export default {
  async getSchools(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const resData = await response.json();
    if (!response.ok) {
      const errorr = new Error(resData.message || "failed to fetch");
      throw errorr;
    }
    const schoolsList = [];
    resData.forEach((sch, i) => {
      if (i < 11) {
        const school = {
          id: sch.id,
          title: sch.title,
          url: sch.url,
        };
        schoolsList.push(school);
      } else {
        return;
      }
    });

    context.commit("setSchools", schoolsList);
  },
};
