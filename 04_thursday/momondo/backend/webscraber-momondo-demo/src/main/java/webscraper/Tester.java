package webscraper;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
//import jdk.jshell.spi.ExecutionControl;
import org.omg.CosNaming.NamingContextPackage.NotFound;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

//Callable
class GetTagDTO implements Callable<TagDTO>{
  String url;
  GetTagDTO(String url){
    this.url = url;
  }
  @Override
  public TagDTO call() throws Exception {
    TagCounter tc = new TagCounter(url);
    tc.doWork();
    return new TagDTO(tc);
  }
}

public class Tester {

    public static List<TagCounter> runSequental() {
        List<TagCounter> urls = new ArrayList();
        urls.add(new TagCounter("https://www.fck.dk"));
        urls.add(new TagCounter("https://www.google.com"));
        urls.add(new TagCounter("https://politiken.dk"));
        urls.add(new TagCounter("https://cphbusiness.dk"));
        for (TagCounter tc : urls) {
            tc.doWork();
        }
        return urls;
    }

    public static List<TagDTO> runParrallel() throws InterruptedException, ExecutionException {
        //throw new ExecutionControl.NotImplementedException("Pleeeeease implement me!");
        //Skal bruge callables, tage en url, returnere Tagcounter
        //callable skal kunne lave tagcounters og lægge dem ind i futures
        // skabelon, simplefuturecallable
        // Implementer executor!!
        ExecutorService executor = Executors.newCachedThreadPool();
        String[] urls = {"https://www.fck.dk","https://www.google.com","https://politiken.dk","https://cphbusiness.dk"};
        //result liste
        List<TagDTO> tagDTOs = new ArrayList<>();
        List<Future<TagDTO>> futures = new ArrayList<>();
        
        for(String url : urls) {
            Future<TagDTO> future = executor.submit(new GetTagDTO(url));
            futures.add(future);
        }
        
        for (Future<TagDTO> future : futures) {
            //Henter tagDTO fra future
            tagDTOs.add(future.get());
        }
        
        return tagDTOs;
    }

    public static void main(String[] args) throws Exception {
        long timeSequental;
        long start = System.nanoTime();

        List<TagCounter> fetchedData = new Tester().runSequental();
        long end = System.nanoTime();
        timeSequental = end - start;
        System.out.println("Time Sequential: " + ((timeSequental) / 1_000_000) + " ms.");

        for (TagCounter tc : fetchedData) {
            System.out.println("Title: " + tc.getTitle());
            System.out.println("Div's: " + tc.getDivCount());
            System.out.println("Body's: " + tc.getBodyCount());
            System.out.println("----------------------------------");
        }

        
        
        start = System.nanoTime();
        //TODO Add your parrallel calculation here     
        // Run parallel metoden indsættes her
        long timeParallel = System.nanoTime() - start;
        System.out.println("Time Parallel: " + ((timeParallel) / 1_000_000) + " ms.");
        System.out.println("Paralle was " + timeSequental / timeParallel + " times faster");
       
         
    }
}