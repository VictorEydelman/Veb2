import Units.Data;
import Units.Dataone;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

import static java.lang.Math.pow;

@WebServlet("/areaCheck")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        doPost(request,response);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if (request.getParameterNames().hasMoreElements()) {
            double y = Double.parseDouble(request.getParameter("y"));
            double r = Double.parseDouble(request.getParameter("r"));
            Date currentTime = new Date();
            double x = Double.parseDouble(request.getParameter("x"));
            String result = getResult(x, y, r);

            Dataone entry = new Dataone(x, y, r, result, currentTime);

            ServletContext context = request.getServletContext();

            Data entries = (Data) context.getAttribute("entries");
            entries = entries == null ? new Data() : entries;

            entries.addEntry(entry);
            context.setAttribute("entries", entries);
            context.setAttribute("entry", entry);
        } else {
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            System.out.println(request);
        }
    }
    public static String getResult(double x, double y, double r){
        if ((x>=0 && y>=0 && (pow(x,2)+pow(y,2))<=r/2) || (x<=0 && y>=0 && y<=(x+r)/2)
                || (x>=0 && y<=0 && x<=r && y>=-r/2)) {
            return "Входит";
        } else {
            return "Не входит";
        }
    }
}