package com.redhat.ceylon.compiler.java.metadata;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * Marks defaulted parameters.
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface Defaulted {
}
