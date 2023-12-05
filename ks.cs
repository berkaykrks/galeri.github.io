public interface IDbConnection(){
    public string dbName{get; set;}
    public string Path {get; set;}
    public string username {get;set;}
    public string password {get; set;}

    public bool Open();
    public bool Close();

}

public class berkay : IDbConnection(){

}