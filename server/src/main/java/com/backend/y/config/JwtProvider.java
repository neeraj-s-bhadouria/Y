package com.backend.y.config;

import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.security.core.Authentication;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtProvider {
  SecretKey key = Keys.hmacShaKeyFor(JwtConstants.JWT_SECRET_KEY.getBytes());

  public String generateToken(Authentication auth) {
    return Jwts.builder().setIssuedAt(new Date())
        .setExpiration(new Date(new Date().getTime() + 86400000)).claim("email", auth.getName())
        .signWith(key).compact();
  }

  public String getEmailFromToken(String jwt) {
    jwt = jwt.substring(7);
    return String.valueOf(
        Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJwt(jwt).getBody().get("email"));
  }
}
