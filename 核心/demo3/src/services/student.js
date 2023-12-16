
/**
 * 获取所有学生
 */
export async function getAllStudents() {
    return await fetch("http://api.xxx.com/api/student" )
        .then(resp => resp.json()).then(resp => resp.data);
}
