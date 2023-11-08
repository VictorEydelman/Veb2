package Units;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Objects;

public class Data implements Serializable {
    private final Deque<Dataone> entries;
    private final SimpleDateFormat simpleDateFormat;

    public Data() {
        entries = new ArrayDeque<>();
        simpleDateFormat = new SimpleDateFormat("HH:mm:ss");
    }

    public Deque<Dataone> getData() {
        return entries;
    }

    public void addEntry(Dataone entry) {
        entries.addLast(entry);
    }

    public SimpleDateFormat getSimpleDateFormat() {
        return simpleDateFormat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (! (o instanceof Data)) return false;
        Data entries1 = (Data) o;
        return Objects.equals(getData(), entries1.getData()) && Objects.equals(getSimpleDateFormat(), entries1.getSimpleDateFormat());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getData(), getSimpleDateFormat());
    }
}

