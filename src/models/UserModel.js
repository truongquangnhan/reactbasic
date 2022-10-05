class UserModel {
    constructor(id, firstName, lastName, birthDay, sex, religion, nationality, corporate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.sex = sex;
        this.religion = religion;
        this.nationality = nationality;
        this.corporate = corporate;
    }

    getAge = () => {
        try {
            return Math.floor((Date.parse(new Date()) - Date.parse(new Date(this.birthDay))) / 86400000).toString();
        } catch (e) {
            return "Invalid"
        }

    }

    cloneUser = (numberUser, startId) => {
        const users = [];
        for (let index = 1; index <= numberUser; index++) {
            let user = new UserModel();
            user.id = startId + index;
            user.firstName = "Mey Xong";
            user.lastName = "Clone " + user.id;
            user.birthDay = "2022-12-12";
            user.sex = "Male";
            user.religion = "DaoDuc";
            user.nationality = "Dong Lao";
            user.corporate = "RikkeiSoft";
            users.push(user);
        }
        return users;
    }

    setId = (id) => {
        this.id = id;
        return this;
    }

    static cloneUserModel = () => {
        let user = new UserModel();
        user.firstName = "Mey Xong";
        user.lastName = "Clone ";
        user.birthDay = "2022-12-12";
        user.sex = "Male";
        user.religion = "DaoDuc";
        user.nationality = "Dong Lao";
        user.corporate = "RikkeiSoft";
        return user;
    }
}

export default UserModel;