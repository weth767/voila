package br.com.voila.backend.voilabackend.config.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;


@ConfigurationProperties("voilaapi")
public class VoilaApiProperty {
	private String permittedSource = "http://localhost:3000";
	private final Security security = new Security();
	public Security getSecurity() {
		return security;
	}

	public String getPermittedSource() {
		return permittedSource;
	}
	public void setPermittedSource(String permittedSource) {
		this.permittedSource = permittedSource;
	}

	public static class Security {
		private boolean enableHttps;
		public boolean isEnableHttps() {
			return enableHttps;
		}
		public void setEnableHttps(boolean enableHttps) {
			this.enableHttps = enableHttps;
		}
	}
}
