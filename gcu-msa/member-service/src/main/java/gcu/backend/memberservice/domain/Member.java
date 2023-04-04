package gcu.backend.memberservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class Member implements Serializable {
    private Long id;
    private String name;
    private String password;
}
