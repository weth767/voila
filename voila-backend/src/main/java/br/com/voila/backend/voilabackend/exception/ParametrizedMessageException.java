package br.com.voila.backend.voilabackend.exception;

public class ParametrizedMessageException extends RuntimeException{
    public ParametrizedMessageException(String errorMessage) {
        super(errorMessage);
    }
}
