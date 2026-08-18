package com.transweg.backend.contact;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ContactController.class)
class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContactService contactService;

    @Test
    void acceptsValidContactRequest() throws Exception {
        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name":"Max Mustermann","title":"Umzugsanfrage","message":"Ich brauche einen Umzug am 1.9."}
                                """))
                .andExpect(status().isAccepted());

        verify(contactService).sendContactMessage(
                new ContactRequest("Max Mustermann", "Umzugsanfrage", "Ich brauche einen Umzug am 1.9."));
    }

    @Test
    void rejectsBlankName() throws Exception {
        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name":"","title":"Umzugsanfrage","message":"Ich brauche einen Umzug am 1.9."}
                                """))
                .andExpect(status().isBadRequest());
    }
}
