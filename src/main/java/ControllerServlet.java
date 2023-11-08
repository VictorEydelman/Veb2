import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,HttpServletResponse resp) throws ServletException, IOException {
        doPost(request,resp);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (req.getParameter("x")!=null && req.getParameter("y")!=null && req.getParameter("r")!=null
                && !req.getParameter("x").isEmpty() && !req.getParameter("y").isEmpty() && !req.getParameter("r").isEmpty()){

            getServletContext().getRequestDispatcher("/areaCheck").forward(req, resp);
        } else {
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        }
    }

}
